import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="bg-dark text-center text-white">
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                2023 Copyright ©
                <a
                    className="text-white"
                    href="https://github.com/chamithZ/BuildFlow.git"
                >
                    &nbsp;BuildFlow Construction & Procument Management App 
                </a>
            </div>
        </MDBFooter>
    );
}