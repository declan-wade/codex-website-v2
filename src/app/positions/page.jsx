'use client'
import PageIntro from "@/components/PageIntro";
import React from "react";
import Container from "@/components/Container";
import PositionList, { PositionListItem } from "@/components/PositionList";

const WorkPage = () => {
    const [positions, setPositions] = React.useState([])

    async function getPositions(){
        const response = await fetch('https://codex-group-support.vercel.app/api/positions')
        const payload = await response.json()
        console.log(payload)
        setPositions(payload)
    }

    React.useEffect(()=>{
        getPositions()
    },[])

  return (
    <>
      <PageIntro
        eyebrow="Positions"
        title="We are always looking for talented and enthusiastic team members."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. Codex Group team members share a collective vision to bring this efficiency to businesses of any size.
        </p>
      </PageIntro>
      <Container className="mt-16">
      <PositionList>
      {positions.length <= 0 ? (
  <p>No open positions at this time!</p>
    ) : (
            positions.map((position) => (
            <PositionListItem key={position.id} title={position.positionName} footer={position.closeDate} id={position.id}>
                {position.description}
            </PositionListItem>
            ))
       )}
        </PositionList>
      </Container>
    </>
  );
};

export default WorkPage;
