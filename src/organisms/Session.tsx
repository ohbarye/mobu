import React from "react";

import Timer from "../molecules/Timer";
import Interval from "../molecules/Interval";

const Session: React.FunctionComponent<{
  elapsedTime: string;
  onStartOrPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  interval: number;
}> = ({ elapsedTime, onStartOrPause, onReset, onIntervalChange, interval }) => {
  return (
    <div>
      <Timer
        elapsedTime={elapsedTime}
        onStartOrPause={onStartOrPause}
        onReset={onReset}
      />
      <Interval onIntervalChange={onIntervalChange} interval={interval} />
    </div>
  );
};

export default Session;