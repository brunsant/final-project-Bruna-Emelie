import React from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import GroupThoughts from "../components/GroupThoughts"

import styled from "styled-components"

const Grouping = () => {
  return (
    <>
      <Header />
      <GroupThoughts />
      <SubmitButton>
        <Link to="/actionitems"> Go to next </Link>
      </SubmitButton>
    </>
  )
}

export default Grouping

const SubmitButton = styled.button`
  padding: 10px;
  margin: 20px;
  border-radius: 15px;
  border: none;
  background-color: white;
  box-shadow: 0px 8px 15px gray;
  transition: all 0.3s ease 0s;
  cursor: pointer;
`
