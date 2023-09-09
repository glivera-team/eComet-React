const PreviewItem = ({ item }) => {
  return (
    <div className="preview_item" key={item.id}>
      <a className="preview_item_in" href="#">
        <div className="preview_item_img_w">
          <img className="preview_item_img" src={item.img} alt="img" />
        </div>
        <div className="preview_item_content">
          <div className="section_title offset_mod">{item.title}</div>
          <ul className="preview_item_info">
            <li className="preview_item_info_text">
              <span>{item.author}</span>
            </li>
            <li className="preview_item_info_text">
              <span>{item.date}</span>
            </li>
            <li className="preview_item_info_text">
              <span>{item.time}</span>
            </li>
          </ul>
          <div className="preview_item_descr">
            <p>{item.descr}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PreviewItem;
