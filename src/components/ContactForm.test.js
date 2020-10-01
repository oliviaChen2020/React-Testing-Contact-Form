import React from "react"
import {render, screen,fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm"
import { act } from "react-dom/test-utils";

test("test the placeholders for first name and last name", () => {
    render(<ContactForm />);
    
    const firstNameHolder = screen.getByPlaceholderText(/edd/i)
    const lastNameIHolder = screen.getByPlaceholderText(/burke/i)


  });

test("test for submit button", () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole(/button/i)
    fireEvent.click(submitButton);
  });

test("test for Input field", () =>{
  render(<ContactForm />)

  
    const firstNameInput = screen.getByLabelText(/first name/i)
    expect(firstNameInput).toBeInTheDocument()

    const lastNameInput = screen.getByLabelText(/last name/i)
    expect(lastNameInput).toBeInTheDocument()

    const emailInput = screen.getByLabelText(/email/i)
    expect(emailInput).toBeInTheDocument()

    const messageInput = screen.getByLabelText(/message/i)
    expect(messageInput).toBeInTheDocument()

    act(()=>{

    
    fireEvent.change(firstNameInput, {target:{name:'firstName', value:'Edd'}})
    fireEvent.change(lastNameInput, {target:{name:'lastName', value:'chen'}})
    fireEvent.change(emailInput, {target:{name:'email', value:'jack@gmail.com'}})
    fireEvent.change(messageInput, {target:{name:'message', value:'this is good'}})
  })
})

