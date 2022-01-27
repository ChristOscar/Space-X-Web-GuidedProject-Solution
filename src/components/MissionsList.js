import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error" data-testid="missions-list-error">
          {props.error}
        </div>
      ) : (
        <div data-testid="mission-list">
          <ul>
          {props.missions.map(mission => (
            <li key={mission.mission_id}>
              <div
                className="mission"
                data-testid="mission"
                key={mission.mission_id}
              >
                {/* {mission.mission_name} */}
              <div>
                <a href={mission.website} target="_blank" rel="noopener noreferrer">{mission.mission_name}</a>
                <p>{mission.description}</p>
                <a href={mission.twitter} target="_blank" rel="noopener noreferrer">twitter</a>
              </div>
                
              </div>
            </li>
          ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default MissionsList;
