import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Action, Column } from "../../types/data-table";
import DashboardIcon from "../icons/DashboardIcon";

type Props = {
  columns: Column[];
  data: any[] | undefined;
  actions?: Action[];
  headerBackground?: string;
};

export default function DataTable({ columns, data, actions }: Props) {
  return (
    <table className="table rounded-2">
      <thead className="bg-secondary">
        <tr>
          {columns.map((column) => {
            return (
              <th className="p-4" key={column.accessor}>
                {column.header}
              </th>
            );
          })}
          {actions && actions.length > 0 ? (
            <th className="p-4">Actions</th>
          ) : undefined}
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item) => {
          return (
            <tr key={item?.id}>
              {columns.map((column) => {
                return (
                  <td
                    className={`text-${
                      column.alignment || "left"
                    } p-4 align-middle`}
                    key={`${column.accessor}+${item?.id}`}
                  >
                    {column.formatDisplay
                      ? column.formatDisplay(item)
                      : item[column.accessor]}
                  </td>
                );
              })}
              {actions ? (
                actions.length === 1 ? (
                  <td className="p-4 align-middle">
                    <button
                      className="btn btn-success"
                      onClick={() => actions[0].action(item)}
                    >
                      {actions[0].content}
                    </button>
                  </td>
                ) : actions.length > 1 ? (
                  <DropdownButton id="" title={<DashboardIcon />}>
                    {actions.map((action) => {
                      return (
                        <Dropdown.Item
                          key={action.name}
                          onClick={() => action.action(item)}
                        >
                          {action.content}
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                ) : undefined
              ) : undefined}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
