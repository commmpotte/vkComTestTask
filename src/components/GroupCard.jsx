import React from 'react'
import { FaLock, FaUnlockAlt } from 'react-icons/fa'

function GroupCard({ group }) {
  return (
    <div className="card bg-light-subtle">
      <div className="card-body ">
        <div className=" d-flex justify-content-between align-items-center">
          {group.avatar_color ? (
            <div
              className="avatar d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: group.avatar_color,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            >
              <h5 className="card-title ">{group.name}</h5>
            </div>
          ) : (
            <div
              className="avatar d-flex justify-content-center align-items-center bg-light-subtle"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            >
              <h5 className="card-title ">{group.name}</h5>
            </div>
          )}

          {/* {group.avatar_color && (
            <div
              className="avatar d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: group.avatar_color,
                width: '100px',
                height: '100px',
                borderRadius: '50%',
              }}
            >
              <h5 className="card-title ">{group.name}</h5>
            </div>
          )} */}
          {group.closed ? <FaLock /> : <FaUnlockAlt />}
        </div>
        <div className=" d-flex justify-content-between  mt-3">
          <h6 className="card-text">Members: {group.members_count}</h6>
          {group.friends && group.friends.length > 0 && (
            <div>
              <h6>Friends:</h6>
              <ul>
                {group.friends.map((friend, index) => (
                  <li key={index}>
                    {friend.first_name} {friend.last_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GroupCard
