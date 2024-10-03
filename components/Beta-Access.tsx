/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Input, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { toggleRequestModal } from "redux/RequestBetaAccess/action";
import { getModalState } from "redux/RequestBetaAccess/selector";
import style from "../styles/BetaAccess.module.css";
import axios from "axios";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonLoader from "./Button-Loader";
import { isEmailValid } from "helpers/validators";

const BetaAccess: React.FC<any> = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
  });
  const [showAlert, setShowAlert] = useState<Boolean>(false);
  const [submitting, setSubmitting] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const open = useSelector(getModalState);

  const formAnimation = useAnimation();
  const [formRef, formInView] = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (formInView) {
      formAnimation.start((i) => ({
        transform: "translateY(0%)",
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.1,
        },
      }));
    } else {
      formAnimation.start((i) => ({
        transform: "translateY(100%)",
        opacity: 0,
      }));
    }
  }, [formAnimation, formInView]);

  const closeAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }

  const submitRequest = async () => {
    if (!isEmailValid(formData?.email)) {
      message.error('Kindly enter a valid email address');
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${process.env.BASE_URL}/v1/waitlist/join`, formData);
      setShowAlert(true);
      closeAlert();
      setFormData({ name: '', email: '' })
      setSubmitting(false);
    } catch(err:any) {
      message.error(err?.response?.data?.message);
      setSubmitting(false);
    }
  };

  return (
    <div className={`${style.beta} ${open ? style.open : ""}`}>
      <div className={`${style.noti} ${showAlert ? style.open : ""}`}>
        <p>
          <img src='/images/svg/check-square.svg' alt="" />
          You are on the waitlist <span> Go to home page</span>
        </p>
      </div>

      <div className={style.close}>
        <img src="/images/svg/logo_b.svg" alt="" />
        <img
          src="/images/svg/close.svg"
          alt=""
          onClick={() => dispatch(toggleRequestModal(false))}
        />
      </div>
      
      <div ref={formRef}>
        <motion.div
          className={style.request_form}
          initial={{ transform: "translateY(100%)", opacity: 0 }}
          animate={formAnimation}
        >
          <h2>
            Book <span>demo</span>
          </h2>
          <div className={style.form_holder}>
            <label htmlFor="full_name">Full name</label>
            <Input
              type="text"
              name="full_name"
              placeholder="Full name"
              value={formData?.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className={style.form_holder}>
            <label htmlFor="email">Email Address</label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData?.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className={style.form_holder}>
            <button
              disabled={!formData.name || !formData.email || submitting ? true : false}
              onClick={() => submitRequest()}
            >
              {submitting ? <ButtonLoader /> : "Book Demo"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BetaAccess;
