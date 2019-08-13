module.exports = {
  eventTypeCountQuery: `{
        event_toollaunch_aggregate {
          aggregate {
            count
          }
        }
        event_tooluse_aggregate {
          aggregate {
            count
          }
        }
      }`,
  uniqueCourseToolUsage: `{
    tools_usage(order_by: {count: desc}, where: {count: {_gt: "1"}}) {
      object_id
      count
    }
  }`
}
