import React, { useState, useEffect } from 'react'
// import GroupCard from './GroupCard'
import groupsData from '../server/groups.json'
import { GetGroupsResponse, Group } from '../types'
import GroupCard from './GroupCard'

function GroupList() {
  const [groups, setGroups] = useState<Group[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const getGroupsResponse: GetGroupsResponse = {
          result: 1,
          data: groupsData as Group[],
        }

        if (getGroupsResponse.result === 1) {
          const validatedGroups =
            getGroupsResponse.data?.map((group) => ({
              ...group,
              friends: group.friends?.map((friend) => ({
                first_name: friend.first_name,
                last_name: friend.last_name,
              })),
            })) || []

          setGroups(validatedGroups)
          setLoading(false)
        } else {
          console.error('Error: Unable to fetch groups data')
          setLoading(false)
        }
      }, 1000)
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {groups.map((group) => (
            <div key={group.id} className="col-md-4 mb-4">
              <GroupCard group={group} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GroupList

{/* <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{group.name}</h5>
                  <p className="card-text">Members: {group.members_count}</p>
                  {group.friends && (
                    <div>
                      <h6>Friends:</h6>
                      <ul className="list-group list-group-flush">
                        {group.friends.map((friend) => (
                          <li
                            key={`${friend.first_name}-${friend.last_name}`}
                            className="list-group-item"
                          >
                            {friend.first_name} {friend.last_name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div> */}
