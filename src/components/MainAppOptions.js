import React from "react";
import './MainAppOptions.css';
import FindFood from "./FindFood";
/* import BookingHistory from './BookingHistory';
import SettingsPanel from './SettingsPanel';
 */
export default function MainAppOptions() {
    return (
        <div className="c-main-app-options">
            <FindFood />
{/*             <BookingHistory />
            <SettingsPanel /> */}
        </div>
    )
}