const SizeChanger = () => {
  return <div></div>;
};

export default SizeChanger;

// import { ConfigProvider } from 'antd';
// import classNames from 'classnames';
// import { Select } from 'components/Select';
// import { colors } from 'constants/config';
// import { usePaginationNavigate, useQueryConfig } from 'hooks';
// import { useMemo } from 'react';

// type Props = {
//   visible: boolean;
//   value?: string;
//   currentPage?: string;
//   total: string;
//   pageSizeDefault?: string;
//   onChange?: (pageSize: string) => void;
//   options?: Option[];
// };

// const SizeChanger = (props: Props) => {
//   const { visible, total, options, onChange, value, currentPage, pageSizeDefault } = props;

//   const queryConfig = useQueryConfig(pageSizeDefault);
//   let page: string | undefined;
//   let pageSize: string | undefined;
//   if (!currentPage) {
//     page = queryConfig.page;
//     pageSize = queryConfig.pageSize;
//   } else {
//     page = currentPage;
//     pageSize = value;
//   }
//   const handleNavigation = usePaginationNavigate();

//   const handleSelectQuantity = (pageSize: string) => {
//     // const { value: pageSize } = event.target;

//     if (onChange) {
//       return onChange?.(pageSize);
//     }

//     return handleNavigation({ ...queryConfig, page: '1', pageSize });
//   };

//   const resultTotal = useMemo(() => {
//     let result = 0;

//     if (page && pageSize) {
//       let temp = +page * +pageSize;

//       if (temp - +total >= 0) {
//         result = +total;
//       } else if (temp - +total < 0) {
//         result = +page * +pageSize;
//       }
//     }

//     return result;
//   }, [page, pageSize, total]);

//   const currentPageSize = useMemo(() => {
//     if (page && pageSize) {
//       return +page * +pageSize - +pageSize + 1;
//     }
//   }, [page, pageSize]);

//   const PAGE_SIZE_OPTIONS = [
//     { label: pageSizeDefault || 30, value: pageSizeDefault || 30 },
//     { label: (+(pageSizeDefault || 30) / 3) * 5, value: (+(pageSizeDefault || 30) / 3) * 5 },
//     { label: (+(pageSizeDefault || 30) / 3) * 10, value: (+(pageSizeDefault || 30) / 3) * 10 }
//   ] as Option[];
//   return (
//     <>
//       {visible && !!total && (
//         <div className={classNames('pagi flex items-center gap-3')}>
//           {/* <select
//             className={`rounded-md border border-gray-300 py-1 px-2 outline-none focus:border-primary-30 focus:shadow-sm `}
//             onChange={handleSelectQuantity}
//             value={value}
//           >
//             {PAGE_SIZE_OPTIONS.map(({ label, value }) => (
//               <option value={value} key={value}>
//                 {label}
//               </option>
//             ))}
//           </select> */}
//           <ConfigProvider
//             theme={{
//               components: {
//                 Select: {
//                   controlHeight: 30,
//                   colorBorder: colors.primary[20],
//                   colorText: colors.primary[20],
//                   colorIcon: colors.primary[20],
//                   borderRadius: 4
//                 }
//               }
//             }}
//           >
//             <style>{`
//               .pagi .ant-select-arrow  {
//                 color: ${colors.primary[20]}
//               }`}</style>
//             <Select
//               allowClear={false}
//               items={options || PAGE_SIZE_OPTIONS}
//               wrapperClassName=''
//               onChange={handleSelectQuantity}
//               value={value}
//               className='w-[70px]'
//               // suffixIcon={<DownOutlined style={{ color: colors.primary[20] }} />}
//             />
//           </ConfigProvider>
//           <p className='whitespace-nowrap text-primary-20'>
//             Hiển thị {currentPageSize} - {resultTotal} của {total}
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default SizeChanger;
