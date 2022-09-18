import { Formik, Field, Form } from "formik";
import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../api/apiURL";
import { useAuth } from "../../hooks/Auth";

export const CompanyProfilePage = ({ toggle }) => {
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    roles: "",
    location: "",
    date: "",
    email: "",
    headline: "",
    profileImage: "",
    coverImage: "",
  };

  const validationSchema = yup.object({
    title: yup.string().max(50).required("Required"),
    roles: yup.string().required("Required"),
    location: yup.string().required("Required"),
    date: yup.string().required("Required"),
    email: yup.string().required("Required"),
    headline: yup.string().required("Required"),
    profileImage: yup.string().required("Required"),
    coverImage: yup.string().required("Required"),
  });

  return (
    <div className="h-screen grid grid-cols-1 place-items-center bg-[rgba(0,0,0,0.5)] w-full fixed shadow-md ">
      <div className="flex flex-col items-start justify-center p-12 rounded-lg bg-white ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            console.log(data);
            const token = sessionStorage.getItem("bearer");
            const config = {
              headers: { "x-access-token": `Bearer ${token}` },
            };

            axios
              .patch(
                `${BaseUrl}/company/profile`,
                {
                  body: {
                    tag: "profile",
                    profile: {
                      name: data.title,
                      roles: data.roles,
                      location: data.location,
                      date: data.date,
                      email: data.email,
                      headline: data.headline,
                      profileImage: data.profileImage,
                      coverImage: data.coverImage,
                    },
                  },
                },
                config
              )
              .then((ele) => {
                alert("Job Created Successfully");
                navigate("/dashboard");
              })
              .catch((err) => {
                alert("/Error Occurred");
                navigate("/dashboard");
              });
            toggle();
          }}
        >
          <Form>
            <p className="text-left font-semibold mb-1">Title</p>
            <Field
              name="title"
              type="text"
              className=" w-[30rem] lg:w-[40rem]  px-3  py-2 rounded border-2"
            />
            <p className="text-left font-semibold mb-1">Roles<span className="text-sm text-slate-400">
                {" "}
                (Seperate Roles by Commas ,)
              </span></p>
            <Field
              name="roles"
              type="text"
              as="textarea"
              className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
            />
            <p className="text-left font-semibold mb-1">Location</p>
            <Field
              name="location"
              type="text"
              className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
            />
            <p className="text-left font-semibold mb-1">
              Date
              <span className="text-sm text-slate-400">
                {" "}
                (Enter In DD/MM/YYYY Format)
              </span>
            </p>
            <Field
              name="date"
              type="text"
              className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
            />
            <p className="text-left font-semibold mb-1">Email</p>
            <Field
              name="email"
              type="text"
              className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
            />

            <p className="text-left font-semibold mb-1">
              Headline
              <span className="text-sm text-slate-400">
                {" "}
                (Seperate Headlines by Commas ,)
              </span>
            </p>
            <Field
              name="headline"
              type="text"
              className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
            />

            <p className="text-left font-semibold mb-1">
              Profile Image{" "}
              <span className="text-sm text-slate-400">
                {" "}
                (Enter Google Drive Link)
              </span>
            </p>
            <Field
              name="profileImage"
              type="text"
              className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
            />
            <p className="text-left font-semibold mb-1">
              Cover Image{" "}
              <span className="text-sm text-slate-400">
                {" "}
                (Enter Google Drive Link)
              </span>
            </p>
            <Field
              name="coverImage"
              type="text"
              className=" w-[30rem] lg:w-[40rem]   px-3 py-2 rounded border-2"
            />
            <div className="mt-3  w-full">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-2 rounded-lg w-full"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CompanyProfilePage;
