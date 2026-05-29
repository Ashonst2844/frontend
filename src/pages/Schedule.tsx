import Pages from "../assets/ui/layout/Pages";
import Container from "../assets/ui/layout/Container";
import FloatFrame from "../assets/ui/layout/FloatFrame";

import React from "react";

function Schedule() {

    const [openFrame, setOpenFrame] = React.useState(false);

    const schedules = {
        "day" : [
            {"senin": []},
            {"selasa": []},
            {"rabu": []},
            {"kamis": []},
            {"jum'at": []},
            {"sabtu": []},
        ]
    }

    return (
        <>
            <Pages id="dashboard" className="center">
                <Container w="90%" h="90%" id="schedule-container">
                    {schedules.day.map((schedule, index) => {
                    const dayName = Object.keys(schedule)[0];
                    const dayEvents = schedule[dayName];
                    return (
                    <div key={index} className="days-box">
                        <h2 style={{color:"var(--accent)"}}>{dayName.toUpperCase()}</h2>
                        <span>Kelas</span>
                        <ul>
                            {dayEvents.map((kelas: string, idx: string) => (
                            <li key={idx}>{kelas}</li>
                        ))}
                        </ul>
                    </div>
                    );})}
                </Container>
                <div className="add-button center background-gradient button" onClick={() => setOpenFrame(true)}>
                    <img src="/src/assets/icon/plus.svg" alt="Add" />
                </div>
            </Pages>
            <FloatFrame id="add-schedule" open={openFrame} onClose={() => setOpenFrame(false)}>
                <h1>Tambah Jadwal</h1>
            </FloatFrame>
        </>
    )
}
export default Schedule;