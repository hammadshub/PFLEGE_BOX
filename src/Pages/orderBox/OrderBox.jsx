import React,{useState} from "react";
import "./style.css";
 



const OrderBox = () => {

  const [progress, setProgress] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleIncrementClick = () => {
    if (progress < 100) {
      const newProgress = progress + 10;
      setProgress(newProgress);
      if (newProgress >= 50) {
        setButtonDisabled(true);  
      }
    }
  };

  const handleDecrementClick = () => {
    if (progress > 0) {
      setProgress(progress - 10);
      if (progress <= 50) {
        setButtonDisabled(false);  
      }
    }
  };




  return (
    
    
    <div className="ordr_container">
      <div className="ordr_content">
        <div className="heading">
          <h1>
            Customize Your <span>Care Box</span>
          </h1>
          <img src="./images/line.png" alt="" />
        </div>

 
        <div className="bar"><progress id="file" value={progress} max="100"></progress></div>

        <div className="bar_content">
          <div className="left_bar">
               <div className="left_img">
              <img src="./images/bar.png" alt="" />
            </div>
            <div className="left_cont">Bed Protectors</div>
          </div>

          <div className="right_bar">
            <div className="count_bar">
              <div className="plus">
              <button onClick={handleIncrementClick} disabled={buttonDisabled}> <img src="./images/plus.png" alt="+" /></button>
              </div>

              <div className="count">{progress}</div>
              <div className="minus">
               <button onClick={handleDecrementClick}><img src="./images/minus.png" alt="-" /></button>
              </div>
            </div>
          </div>
        </div>



        <div className="bar_content">
          <div className="left_bar">
               <div className="left_img">
              <img src="./images/bar.png" alt="" />
            </div>
            <div className="left_cont">Bed Protectors</div>
          </div>

          <div className="right_bar">
            <div className="count_bar">
              <div className="plus">
              <button onClick={handleIncrementClick} disabled={buttonDisabled}> <img src="./images/plus.png" alt="+" /></button>
              </div>

              <div className="count">{progress}</div>
              <div className="minus">
               <button onClick={handleDecrementClick}><img src="./images/minus.png" alt="-" /></button>
              </div>
            </div>
          </div>
        </div>


        
        <div className="bar_content">
          <div className="left_bar">
               <div className="left_img">
              <img src="./images/bar.png" alt="" />
            </div>
            <div className="left_cont">Bed Protectors</div>
          </div>

          <div className="right_bar">
            <div className="count_bar">
              <div className="plus">
              <button onClick={handleIncrementClick} disabled={buttonDisabled}> <img src="./images/plus.png" alt="+" /></button>
              </div>

              <div className="count">{progress}</div>
              <div className="minus">
               <button onClick={handleDecrementClick}><img src="./images/minus.png" alt="-" /></button>
              </div>
            </div>
          </div>
        </div>


        
        <div className="bar_content">
          <div className="left_bar">
               <div className="left_img">
              <img src="./images/bar.png" alt="" />
            </div>
            <div className="left_cont">Bed Protectors</div>
          </div>

          <div className="right_bar">
            <div className="count_bar">
              <div className="plus">
              <button onClick={handleIncrementClick} disabled={buttonDisabled}> <img src="./images/plus.png" alt="+" /></button>
              </div>

              <div className="count">{progress}</div>
              <div className="minus">
               <button onClick={handleDecrementClick}><img src="./images/minus.png" alt="-" /></button>
              </div>
            </div>
          </div>
        </div>


        
        <div className="bar_content">
          <div className="left_bar">
               <div className="left_img">
              <img src="./images/bar.png" alt="" />
            </div>
            <div className="left_cont">Bed Protectors</div>
          </div>

          <div className="right_bar">
            <div className="count_bar">
              <div className="plus">
              <button onClick={handleIncrementClick} disabled={buttonDisabled}> <img src="./images/plus.png" alt="+" /></button>
              </div>

              <div className="count">{progress}</div>
              <div className="minus">
               <button onClick={handleDecrementClick}><img src="./images/minus.png" alt="-" /></button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bar_content">
          <div className="left_bar">
               <div className="left_img">
              <img src="./images/bar.png" alt="" />
            </div>
            <div className="left_cont">Bed Protectors</div>
          </div>

          <div className="right_bar">
            <div className="count_bar">
              <div className="plus">
              <button onClick={handleIncrementClick} disabled={buttonDisabled}> <img src="./images/plus.png" alt="+" /></button>
              </div>

              <div className="count">{progress}</div>
              <div className="minus">
               <button onClick={handleDecrementClick}><img src="./images/minus.png" alt="-" /></button>
              </div>
            </div>
          </div>
        </div>

        
      
      
        
      </div>
    </div>
  
  );
};

export default OrderBox;
