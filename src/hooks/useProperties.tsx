// import { IPagination } from "@/@types/Common";
// import { useQuery } from "@tanstack/react-query";
// import { ColumnProps } from "antd/es/table";
// import { useState } from "react";

// // interface Property {
// //   property_id: string;
// //   property_name: string;
// //   property_label: string;
// //   isUsed: boolean;
// //   value: string; // JSON value can be anything
// // }

// // interface Entity {
// //   id: string;
// //   [key: string]: string; // Dynamic fields for each property_name
// // }

// // const data: Property[] = [
// //   {
// //     property_id: "1",
// //     property_name: "name",
// //     property_label: "Name",
// //     isUsed: true,
// //     value: "value1",
// //   },
// //   {
// //     property_id: "2",
// //     property_name: "datatype",
// //     property_label: "Data Type",
// //     isUsed: false,
// //     value: "value2",
// //   },
// // ];

// // const entity: Entity = {
// //   id: "entity1",
// // };

// // // Dynamically add properties to the entity object based on the provided data
// // data.forEach((property) => {
// //   entity[property.property_name] = property.value;
// // });

// // // // Generate columns for the table based on property names
// // // const columns = data.map((property) => ({
// // //   title: property.property_label,
// // //   dataIndex: property.property_name,
// // //   key: property.property_name,
// // // }));

// // // // Create the data source for the table
// // // const tableData = [
// // //   {
// // //     id: entity.id,
// // //     ...data.reduce((acc, property) => {
// // //       acc[property.property_name] = property.value;
// // //       return acc;
// // //     }, {}),
// // //   },
// // // ];

// const apiData = [
//   {
//     id: "6c8d75ea-445d-4431-b469-08dd26236d92",
//     properties: [
//       {
//         id: "316d2e9d-c75e-44b6-105b-08dd28a4a824",
//         name: "Name",
//         label: "Name",
//         datatype: 0,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "d0d4b9d5-8066-4997-105c-08dd28a4a824",
//         name: "Key",
//         label: "Key",
//         datatype: 0,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "6cafad98-c5d8-4501-105d-08dd28a4a824",
//         name: "Description",
//         label: "Description",
//         datatype: 1,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "20a230ca-67d7-46bc-105e-08dd28a4a824",
//         name: "Status",
//         label: "Status",
//         datatype: 2,
//         isDefault: true,
//         value: "NotStarted",
//       },
//       {
//         id: "7c5effb9-ccb7-4653-105f-08dd28a4a824",
//         name: "LeaderId",
//         label: "LeaderId",
//         datatype: 11,
//         isDefault: true,
//         value: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       },
//       {
//         id: "eb4bbd9d-9a74-4de5-1060-08dd28a4a824",
//         name: "Url",
//         label: "Url",
//         datatype: 0,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "7032b10f-721b-49d5-1061-08dd28a4a824",
//         name: "StartDate",
//         label: "StartDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//       {
//         id: "2cc64800-8096-434a-1062-08dd28a4a824",
//         name: "EndDate",
//         label: "EndDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//     ],
//   },
//   {
//     id: "b4298125-96b3-403a-0831-08dd262643a0",
//     properties: [
//       {
//         id: "316d2e9d-c75e-44b6-105b-08dd28a4a824",
//         name: "Name",
//         label: "Name",
//         datatype: 0,
//         isDefault: true,
//         value: "1",
//       },
//       {
//         id: "d0d4b9d5-8066-4997-105c-08dd28a4a824",
//         name: "Key",
//         label: "Key",
//         datatype: 0,
//         isDefault: true,
//         value: "1",
//       },
//       {
//         id: "6cafad98-c5d8-4501-105d-08dd28a4a824",
//         name: "Description",
//         label: "Description",
//         datatype: 1,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "20a230ca-67d7-46bc-105e-08dd28a4a824",
//         name: "Status",
//         label: "Status",
//         datatype: 2,
//         isDefault: true,
//         value: "NotStarted",
//       },
//       {
//         id: "7c5effb9-ccb7-4653-105f-08dd28a4a824",
//         name: "LeaderId",
//         label: "LeaderId",
//         datatype: 11,
//         isDefault: true,
//         value: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       },
//       {
//         id: "eb4bbd9d-9a74-4de5-1060-08dd28a4a824",
//         name: "Url",
//         label: "Url",
//         datatype: 0,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "7032b10f-721b-49d5-1061-08dd28a4a824",
//         name: "StartDate",
//         label: "StartDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//       {
//         id: "2cc64800-8096-434a-1062-08dd28a4a824",
//         name: "EndDate",
//         label: "EndDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//     ],
//   },
//   {
//     id: "29e99f38-dc86-4b2f-9f6f-08dd26268207",
//     properties: [
//       {
//         id: "316d2e9d-c75e-44b6-105b-08dd28a4a824",
//         name: "Name",
//         label: "Name",
//         datatype: 0,
//         isDefault: true,
//         value: "11",
//       },
//       {
//         id: "d0d4b9d5-8066-4997-105c-08dd28a4a824",
//         name: "Key",
//         label: "Key",
//         datatype: 0,
//         isDefault: true,
//         value: "11",
//       },
//       {
//         id: "6cafad98-c5d8-4501-105d-08dd28a4a824",
//         name: "Description",
//         label: "Description",
//         datatype: 1,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "20a230ca-67d7-46bc-105e-08dd28a4a824",
//         name: "Status",
//         label: "Status",
//         datatype: 2,
//         isDefault: true,
//         value: "NotStarted",
//       },
//       {
//         id: "7c5effb9-ccb7-4653-105f-08dd28a4a824",
//         name: "LeaderId",
//         label: "LeaderId",
//         datatype: 11,
//         isDefault: true,
//         value: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       },
//       {
//         id: "eb4bbd9d-9a74-4de5-1060-08dd28a4a824",
//         name: "Url",
//         label: "Url",
//         datatype: 0,
//         isDefault: true,
//         value: "string",
//       },
//       {
//         id: "7032b10f-721b-49d5-1061-08dd28a4a824",
//         name: "StartDate",
//         label: "StartDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//       {
//         id: "2cc64800-8096-434a-1062-08dd28a4a824",
//         name: "EndDate",
//         label: "EndDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//     ],
//   },
//   {
//     id: "63455bed-9c0d-4cf7-353d-08dd263816b0",
//     properties: [
//       {
//         id: "316d2e9d-c75e-44b6-105b-08dd28a4a824",
//         name: "Name",
//         label: "Name",
//         datatype: 0,
//         isDefault: true,
//         value: "Project 1",
//       },
//       {
//         id: "d0d4b9d5-8066-4997-105c-08dd28a4a824",
//         name: "Key",
//         label: "Key",
//         datatype: 0,
//         isDefault: true,
//         value: "P001",
//       },
//       {
//         id: "6cafad98-c5d8-4501-105d-08dd28a4a824",
//         name: "Description",
//         label: "Description",
//         datatype: 1,
//         isDefault: true,
//         value: "",
//       },
//       {
//         id: "20a230ca-67d7-46bc-105e-08dd28a4a824",
//         name: "Status",
//         label: "Status",
//         datatype: 2,
//         isDefault: true,
//         value: "NotStarted",
//       },
//       {
//         id: "7c5effb9-ccb7-4653-105f-08dd28a4a824",
//         name: "LeaderId",
//         label: "LeaderId",
//         datatype: 11,
//         isDefault: true,
//         value: "00000000-0000-0000-0000-000000000000",
//       },
//       {
//         id: "eb4bbd9d-9a74-4de5-1060-08dd28a4a824",
//         name: "Url",
//         label: "Url",
//         datatype: 0,
//         isDefault: true,
//         value: "",
//       },
//       {
//         id: "7032b10f-721b-49d5-1061-08dd28a4a824",
//         name: "StartDate",
//         label: "StartDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//       {
//         id: "2cc64800-8096-434a-1062-08dd28a4a824",
//         name: "EndDate",
//         label: "EndDate",
//         datatype: 4,
//         isDefault: true,
//         value: "27/12/2024 3:06:14 SA",
//       },
//     ],
//   },
// ];
// const columns: Array<ColumnProps<{ [key: string]: string }>> = [
//   {
//     title: "Index", // Fixed column for the entity ID
//     render: (_value, _record, index) => {
//       return <>{index + 1}</>;
//     },
//   },
//   ...Object.values(apiData[0]?.properties || []).map((property) => ({
//     title: property.label,
//     dataIndex: property.name,
//     key: property.name,
//   })),
// ];

// // Step 2: Transform API data to table dataSource
// const dataSource = apiData.map((entity) => {
//   const row: { id: string; [key: string]: string } = { id: entity.id };
//   entity.properties.forEach((property) => {
//     row[property.name] = property.value;
//   });
//   return row;
// });

// const useProperties = () => {
//   const [pagination, setPagination] = useState<IPagination>({
//     current: 1,
//     pageSize: 10,
//   });
//   const {} = useQuery({
//     queryKey: ["filter-projects"],
//   });
//   return {};
// };

// export default useProperties;
