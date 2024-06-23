"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addVideoSchema } from "@/app/models/schemaVideo";
import CategorySelect from "../CategorySelect/CategorySelect";
import Modal from "../Modal/Modal";
import css from "./AddVideoForm.module.css";

const AddVideoForm = ({ setShowModal, refreshVideos }) => {
  const [category, setCategory] = useState(null);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addVideoSchema) });
 
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setShowModal(false);
        refreshVideos();
      }
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    setValue("category", category);
  }, [category]);

  return (
    <Modal setShowModal={setShowModal}>
      <h2 className={css.title}>Add Video Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label>
          <input
            type="text"
            {...register("title")}
            placeholder="Título de video"
            className={css.input}
          />
          <p className={css.errorMsg}>{errors?.title?.message}</p>
        </label>
        <label>
          <input
            type="text"
            {...register("url")}
            placeholder="URL de video"
            className={css.input}
          />
          <p className={css.errorMsg}>{errors?.url?.message}</p>
        </label>
        <label>
          <CategorySelect category={category} setCategory={setCategory} />
          <input
            type="text"
            {...register("category")}
            className={css.invisible}
          />
          <p className={css.errorMsg}>{errors?.category?.message}</p>
        </label>
        <button type="submit" className={css.submitBtn}>
          Confirmar
        </button>
      </form>
    </Modal>
  );
};

export default AddVideoForm;
