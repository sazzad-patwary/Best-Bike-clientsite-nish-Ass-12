import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className="add-service">
            <h1>Give Your Feedback</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your name" />
                <textarea {...register("feedback")} placeholder="Your comment about our services" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;