// import { Card, Divider, Typography } from "antd";
// import { useState } from "react";
// import PersonInput from "./PersonInput";
// import PersonView from "./PersonView";
// const { Text } = Typography;

// const PersonDatatype = () => {
//   const people = [
//     {
//       id: "1",
//       name: "Alice Johnson",
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       id: "2",
//       name: "Bob Smith",
//       avatar: "https://randomuser.me/api/portraits/men/47.jpg",
//     },
//     {
//       id: "3",
//       name: "Charlie Brown",
//       avatar: "", // No avatar for fallback
//     },
//   ];
//   const [selectedPersonId, setSelectedPersonId] = useState<
//     string | undefined
//   >();

//   return (
//     <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
//       <Card
//         title="Assign a Person"
//         bordered
//         style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
//       >
//         {/* PersonInput Component */}
//         <PersonInput
//           people={people}
//           value={selectedPersonId}
//           onChange={(id) => setSelectedPersonId(id)}
//         />

//         <Divider />

//         {/* PersonView Component */}
//         <h3>Selected Person</h3>
//         {selectedPersonId ? (
//           <PersonView personId={selectedPersonId} people={people} />
//         ) : (
//           <Text type="secondary">No person selected</Text>
//         )}
//       </Card>
//     </div>
//   );
// };

// export default PersonDatatype;

