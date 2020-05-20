import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from "../menu-item/MenuItem";

import "./Directory.scss";

interface DirectoryProps {
  title?: string;
  imageUrl?: string;
  id?: number;
  linkUrl?: string;
  sections: any
}

const Directory: React.FC<DirectoryProps> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((item: any) => {
        return (
          <MenuItem
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            linkUrl={item.linkUrl}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
