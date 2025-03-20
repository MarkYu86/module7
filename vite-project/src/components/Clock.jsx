import { useState, useEffect } from "react";

// Renders a digital time that updates every second
export function Clock() {
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    let clockInterval = setInterval(() => tick(), 1000);
    console.log('Clock component mounted');
    
    // function returned from useEffect is run on unmount
    // and used to cleanup any side effects
    return () => {
    console.log('Clock component unmounted');
    clearInterval(clockInterval);
    }
    }, []);
    
    // ++ Watch the console when the Clock is removed -
    // does the ticking still continue now?
    
    // ++ Try to add another state variable tickCount, to keep
    // track of (and display) the number of seconds the clock
    // has ticked since mounting. Reset it to 0 on unmount.
    // Hint: see here if the counter has issues incrementing
  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?
