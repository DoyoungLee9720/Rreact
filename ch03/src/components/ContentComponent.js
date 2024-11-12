
const ContentComponent = ({children}) => {
  /*
        children
        - 부모 컴포넌트가 자식 컴포넌트 사이에 포함된 내용을 전달하는 특별한 props
    */
  return (
    <div className="ContentComponent">
      <h4>ContentComponent</h4>
      {children}
    </div>
  );
};
export default ContentComponent;