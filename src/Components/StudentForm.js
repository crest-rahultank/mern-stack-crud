import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "react-bootstrap";
import * as Yup from "yup";

const StudentForm = (props) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Required"),
		email: Yup.string()
			.email("You have enter an invalid email address")
			.required("Required"),
		rollno: Yup.number()
			.positive("Invalid roll number")
			.integer("Invalid roll number")
			.required("Required"),
	});
	console.log(props);
	return (
		<div className="form-wrapper">
			<Formik {...props} validationSchema={validationSchema}>
				<Form>
					<FormGroup style={{margin: "10px"}}>
						<Field name="name" type="text"
							placeholder="Enter your name"
							className="form-control" />
						<ErrorMessage
							name="name"
							className="d-block invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup style={{margin: "10px"}}>
						<Field name="email" type="text"
							placeholder="Enter your email"
							className="form-control" />
						<ErrorMessage
							name="email"
							className="d-block invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup style={{margin: "10px"}}>
						<Field name="rollno" type="number"
							placeholder="Enter your rollno"
							className="form-control" />
						<ErrorMessage
							name="rollno"
							className="d-block invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<Button variant="danger" size="lg" style={{margin: "10px"}}
						block="block" type="submit">
						{props.children}
					</Button>
				</Form>
			</Formik>
		</div>
	);
};

export default StudentForm;
