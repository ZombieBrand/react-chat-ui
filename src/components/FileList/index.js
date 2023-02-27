import React from "react";
import PropTypes from "prop-types";
import { StyledFileList, Files } from "./style";
import FilterList from "components/FilterList";
import FileCard from "components/FileCard";
import fileData from "data/files";
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

function FileList(props) {
  const { children, ...rest } = props;
  const trailAnimes = useStaggeredList(fileData.length);
  return (
    <StyledFileList {...rest}>
      <FilterList options={["最新文件优先", "按文件名排序"]}>
        <Files>
          {fileData.map((file, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <FileCard key={file.id} file={file} />
            </animated.div>
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
