import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"

const TripleSeatModa = ({ isModelOpen, closeModal }) => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    company: "",
    nature_of_event: "",
    event_date: new Date(),
    time_of_event: {
      start_time: "",
      end_time: "",
    },
    number_of_peoples: "",
    additional_note: "",
  })

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const datePickerHandler = date => {
    setData({ ...data, event_date: date })
  }

  const eventTimeHandle = e => {
    setData({
      ...data,
      time_of_event: { ...data.time_of_event, [e.target.name]: e.target.value },
    })
  }

  const formSumbitHandler = e => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log("Data is ", data)
  }, [data])

  return (
    isModelOpen && (
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/70 grid place-items-center px-4 py-8">
        <div className="text-brandDark bg-white p-6 rounded-lg h-full md:h-auto overflow-scroll md:max-w-[640px] md:mx-auto">
          <h2 className="text-lg leading-6 font-medium mb-1">
            The Perfect Spot
          </h2>
          <p className="text-sm leading-5 mb-4">
            Hold your parties, events and large gatherings with Sweet Liberty.
            With large seating areas, spacious gathering spots and unique bar
            experience, this is just the place to be.
          </p>
          <h3 className="text-sm leading-5 mb-4 text-brandPink">
            Fill in the form below
          </h3>
          <hr className="mb-4" />
          <form className="md:pr-10" onSubmit={formSumbitHandler}>
            {/* First Name */}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>First name*</Label>
              <InputField
                type="text"
                name="first_name"
                value={data.first_name}
                required
                onChange={changeHandler}
              />
            </div>
            {/* Last Name */}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Last name*</Label>
              <InputField
                type="text"
                name="last_name"
                value={data.last_name}
                required
                onChange={changeHandler}
              />
            </div>
            {/* Email Address*/}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Email address*</Label>
              <InputField
                type="email"
                name="email"
                value={data.email}
                required
                onChange={changeHandler}
              />
            </div>
            {/* Phone Number*/}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Phone number*</Label>
              <InputField
                type="text"
                name="phone_number"
                value={data.phone_number}
                required
                onChange={changeHandler}
              />
            </div>
            {/* Company */}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Company*</Label>
              <InputField
                type="text"
                name="company"
                value={data.company}
                onChange={changeHandler}
              />
            </div>
            <hr className="mb-2 md:mb-4" />
            {/* Nature Of Event */}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Nature of this event</Label>
              <InputField
                type="text"
                name="nature_of_event"
                value={data.nature_of_event}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Event date*</Label>
              <div className="rounded-md border-[1px] border-[#D1D5DB] w-full md:w-[380px] p-1 flex items-center">
                <svg
                  fill="none"
                  viewBox="0 0 20 21"
                  width="20"
                  height="20"
                  className="mr-1"
                >
                  <path
                    fill="#9CA3AF"
                    fillRule="evenodd"
                    d="M6 2.5a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2h-1v-1a1 1 0 1 0-2 0v1H7v-1a1 1 0 0 0-1-1Zm0 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <DatePicker
                  selected={data.event_date}
                  onChange={datePickerHandler}
                  className="w-full"
                />
              </div>
            </div>
            {/* Time Of Event */}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Time of event*</Label>
              <div className="md:flex md:items-center md:w-[380px]">
                <Label>Start Time</Label>
                <input
                  type="time"
                  name="start_time"
                  placeholder="Start Time"
                  value={data.event_date.start_time}
                  onChange={eventTimeHandle}
                  className="mb-1 w-full md:w-auto rounded-md border-[1px] border-[#D1D5DB] md:mx-2"
                />
                <Label>End Time</Label>
                <input
                  type="time"
                  name="end_time"
                  value={data.event_date.end_time}
                  onChange={eventTimeHandle}
                  className="w-full md:w-auto rounded-md border-[1px] border-[#D1D5DB] md:ml-2"
                />
              </div>
            </div>
            {/* Number of People */}
            <div className="mb-2 md:mb-4 md:flex items-center justify-between">
              <Label>Number of people*</Label>
              <InputField
                type="text"
                name="number_of_peoples"
                value={data.number_of_peoples}
                onChange={changeHandler}
              />
            </div>
            {/* Any Additional Notes */}
            <div className="mb-4 md:flex items-center justify-between">
              <Label>Any additional notes</Label>
              <InputField
                type="text"
                name="additional_note"
                value={data.additional_note}
                onChange={changeHandler}
              />
            </div>
            <hr className="mb-4" />
            <div className="mb-2 md:mb-4 flex flex-col md:flex-row items-center justify-between">
              <CancelButton
                className="order-2 md:order-1 md:mr-3"
                onClick={closeModal}
              />
              <SubmitButton className="order-1 md:order-2 mb-2 md:mb-0 cursor-pointer bg-opacity-90 hover:bg-opacity-100 transition-all duration-100" />
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default TripleSeatModa

const Label = ({ children }) => {
  return <label className="text-sm leading-5 font-medium">{children}</label>
}

const InputField = ({ type, name, value, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="block rounded-md border-[1px] border-gray-300 w-full md:w-[380px] p-2"
    />
  )
}

const SubmitButton = ({ className }) => {
  return (
    <input
      type="submit"
      name="sumbit"
      className={`${className} bg-brandPink p-[9px] text-white text-sm leading-5 font-medium rounded-md shadow-sm w-full border-[1px] border-brandPink`}
    />
  )
}

const CancelButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} p-[9px] text-brandDark border-[1px] border-gray-300 text-sm leading-5 font-medium rounded-md shadow-sm w-full`}
    >
      Cancel
    </button>
  )
}
