/*
---------------------- USAGE ----------------------
item = Some js object, like: { name: '', email: '', phone: '' }

data = {[item, item, item]}

fields = { {
  someKey: {
    label: "It's column name" or (someKey: string, columnIndex: number) => FunctionComponent,
  
    // Gives possibility to format cell value
    formatter: (item[someKey], cellIndex, item, itemIndex) => newFormattedStringValue,
    
    // Gives possibility to custom cell
    component: (item[someKey], cellIndex, item, itemIndex) => FunctionComponent,

    sortBy: "sortingName"
  } 
} }

onSortUpdate = (newSort: [fields[sortedField].sortBy, 'asc' | 'desc']) => any

children: // If exist, would be visible, when data is empty
*/

import React, { Fragment, FunctionComponent, useEffect, useState } from "react";

interface GridTableProps {
  data?: Array<any>;
  fields?: any;
  isLoading?: boolean;
  loadingRow?: number;
  sort?: Array<string>;
  onSortUpdate?: any;
  children?: any;
}

export const GridTable: FunctionComponent<GridTableProps> = ({
  data = [],
  fields = {},
  isLoading = false,
  loadingRow = NaN,
  sort = [],
  onSortUpdate = () => undefined,
  children,
}) => {
  const [dataParsed, setParsedData] = useState<Array<any>>([]);
  const parseData = () => {
    const dataBuff: Array<any> = [];

    for (let i = 0; i < data.length; i++) {
      const item: any = data[i];

      for (const field of Object.keys(fields)) {
        dataBuff.push({
          key: field,
          row: item,
          rowIndex: i,
        });
      }
    }

    setParsedData(dataBuff);
  };

  useEffect(() => {
    parseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, fields]);
  return (
    <Fragment>
      <div
        className="grid-table w-full grid gap-y-[2px] bg-[#f1f1f1] border-[#f1f1f1] border-[2px] rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${Object.keys(fields).length}, auto)`,
        }}
      >
        {/* COLUMNS */}
        {Object.keys(fields).map((fieldName: string, index: number) => (
          <ColumnCell
            key={fieldName + index}
            field={fields[fieldName]}
            fieldName={fieldName}
            index={index}
            isLoading={isLoading}
            sortType={sort[1]}
            sortField={sort[0]}
            onClick={onSortUpdate}
          />
        ))}

        {/* LOADER */}
        {isLoading && (
          <Row fieldsCount={Object.keys(fields).length}>
            <div className="h-16">
              <Loader />
            </div>
          </Row>
        )}

        {/* CELLS */}
        {!isLoading &&
          !!dataParsed.length &&
          dataParsed.map((item, index) => (
            <DataCell
              key={item.key + index}
              item={item}
              index={index}
              fields={fields}
              loadingRow={loadingRow}
            />
          ))}

        {/* NO DATA */}
        {!isLoading && !dataParsed.length && (
          <Row className="py-6" fieldsCount={Object.keys(fields).length}>
            {children ? children : "No data"}
          </Row>
        )}
      </div>
    </Fragment>
  );
};

export const GridTableCell: FunctionComponent<any> = (props) => {
  return (
    <div
      {...props}
      className={`${
        props.className
      } grid-table-cell text-[14px] bg-white flex items-center ${
        props.align ? `justify-${props.align}` : "justify-center"
      }  p-2 `}
    >
      {props.children}
    </div>
  );
};

const Row: FunctionComponent<any> = ({ className, fieldsCount, children }) => {
  return (
    <GridTableCell
      className={className}
      style={{ gridColumn: `1/${fieldsCount + 1}` }}
    >
      {children}
    </GridTableCell>
  );
};

const ColumnCell: FunctionComponent<any> = ({
  field = {},
  fieldName,
  index,
  isLoading = false,
  sortType,
  sortField,
  onClick = () => undefined,
}) => {
  if (typeof field.label === "function") {
    return field.label(fieldName, index);
  }
  return (
    <GridTableCell
      className={`grid-table-column-title text-[#808080] text-center group ${
        field.sortBy && !isLoading ? "cursor-pointer" : "pointer-events-none"
      }`}
      align={field.align}
      key={fieldName + index}
      onClick={() =>
        onClick([field.sortBy, sortType === "asc" ? "desc" : "asc"])
      }
    >
      {field.sortBy === sortField && (
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" mr-[6px]"
        >
          <path
            d="M2.99999 11L0.401917 8H5.59807L2.99999 11Z"
            fill="#808080"
            fillOpacity={`${sortType !== "asc" ? "1" : "0.4"}`}
          />
          <path
            d="M2.99999 0L5.59807 3H0.401917L2.99999 0Z"
            fill="#808080"
            fillOpacity={`${sortType === "asc" ? "1" : "0.4"}`}
          />
        </svg>
      )}

      <span className={field.sortBy ? `mr-[12px]` : ""}>
        {field.label || ""}
      </span>
    </GridTableCell>
  );
};

const DataCell: FunctionComponent<any> = ({
  item,
  index,
  fields,
  loadingRow = NaN,
}) => {
  const field = fields?.[item.key];
  const fieldsNames = Object.keys(fields);

  if (loadingRow === item.rowIndex) {
    return item.key === fieldsNames[0] ? (
      <Row fieldsCount={fieldsNames.length}>
        <Loader />
      </Row>
    ) : (
      <></>
    );
  }
  if (field.component) {
    if (item.row?.[item.key]) {
      return field.component(
        item.row?.[item.key],
        index,
        item.row,
        item.rowIndex
      );
    }
  }

  let data = item.row?.[item.key];
  data = typeof data == "number" || typeof data == "string" ? data : "-";

  if (field.formatter) {
    data = field.formatter(
      item.row?.[item.key],
      index,
      item.row,
      item.rowIndex
    );
  }

  return <GridTableCell key={index}>{data}</GridTableCell>;
};

const Loader: FunctionComponent<any> = () => (
  <div>
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  </div>
);

export default GridTable;
