import React from 'react';

const CourseContent = ({content}) => {
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
       
          <thead>
            <tr>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td>{content}</td>
            </tr>
    
           
          </tbody>
        </table>
      </div>
    );
};

export default CourseContent;