import React from "react"
import Layout from "../components/Layout"
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto; 
`

export default function Events({data}) {
	return (
		<Layout heading = {"Catch me outside! "}>
      <StyledDiv>
        {data.allDatoCmsLiveEvent.nodes.map(liveEvent => {
          return (
            <article className="event">
              <h3>{liveEvent.eventName}</h3>
              <time> {liveEvent.startDate} - {liveEvent.endDate} </time>
              <address>{liveEvent.website}</address>
            </article>
          )
        })}
      </StyledDiv>
    </Layout>
	)
}

export const query = graphql`
  query events {
    allDatoCmsLiveEvent {
      nodes {
        eventName
        startDate
        endDate
        website
      }
    }
  }
`