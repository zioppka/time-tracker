import React from 'react';
import './Advice.css';
import { useSelector } from 'react-redux';

export function Advice() {
    const dataWeek = useSelector((state) => state.week);
    let totalDays = 0;
    let workHours = 0;
    let sleepHours = 0;
    let personalHours = 0;

    dataWeek.forEach((item) => {
        if (item.work === 0 && item.sleep === 0 && item.personal === 0) return;
        workHours += +item.work;
        sleepHours += +item.sleep;
        personalHours += +item.personal;
        totalDays += 1;
    });

    function findSleepAdvice() {
        if (sleepHours / totalDays < 7) {
            return `You average less than 7 hours of sleep, make more time for it. Your avg hours: ${
                sleepHours / totalDays
            }`;
        }
        if (sleepHours / totalDays > 10) {
            return `You've been sleeping too much this week, slow down. Your avg hours: ${
                sleepHours / totalDays
            }`;
        }
        if (workHours === 0) {
            return `You have no entries for this sleeping this week`;
        }

        return `Good job, bratan! Your sleep avg hours: ${sleepHours / totalDays}`;
    }
    function findWorkAdvice() {
        if (workHours / totalDays > 8) {
            return `You usually work more than 8 hours, no need to overwork. Your avg hours: ${
                workHours / totalDays
            }`;
        }

        if (workHours / totalDays < 4) {
            return `You need to work harder!. Your avg hours: ${workHours / totalDays}`;
        }

        if (workHours === 0) {
            return `You have no entries for this working this week`;
        }

        return `Good job, bratan! Your work avg hours: ${workHours / totalDays}`;
    }
    function findPersonalAdvice() {
        if (personalHours / totalDays < 3) {
            return `You didn't have much time for fun. Your avg hours: ${
                personalHours / totalDays
            }`;
        }
        if (workHours === 0) {
            return `You have no entries for this personal this week`;
        }

        return `Good job, bratan! Your personal avg hours: ${personalHours / totalDays}`;
    }

    return (
        <div className={'advice'}>
            <div className="container">
                <p className={'advice-title'}>Advice</p>
                <p className={'tip'}>{findSleepAdvice()}</p>
                <p className={'tip'}>{findWorkAdvice()}</p>
                <p className={'tip'}>{findPersonalAdvice()}</p>
            </div>
        </div>
    );
}
