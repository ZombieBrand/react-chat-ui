import React from "react";
import PropTypes from "prop-types";
import { StyledFileList, Files } from "./style";
import FilterList from "components/FilterList";
import FileCard from "components/FileCard";
import fileData from "data/files";

function FileList(props) {
  const { children, ...rest } = props;
  return (
    <StyledFileList {...rest}>
      <FilterList options={["最新文件优先", "按文件名排序"]}>
        <Files>
          {fileData.map((file, i) => (
            <FileCard key={file.id} file={file} />
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  );
}

FileList.propTypes = {
  children: PropTypes.any,
};

export default FileList;
