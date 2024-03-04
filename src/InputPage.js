import React from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import { useState } from 'react';
function InputPage({showHeader}) {
  const { Title } = Typography;
  const { TextArea } = Input;
  const Gender = [
    { key: 1, value: "남성" },
    { key: 2, value: "여성" }
    
]
const Exercise= [
  { key: 1, value: "유산소" },
  { key: 2, value: "팔굽혀펴기" },
  { key: 3, value: "상체운동" },
  { key: 4, value: "하체운동" },
  { key: 5, value: "윗몸일으키기" },
  { key: 6, value: "스포츠" },
  
]
  const [genderValue, setGenderValue] = useState(1)
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [AgeValue, setAgeValue] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [exerciseTime, setExerciseTime] = useState(0)
  const [ExerciseValue, setExerciseValue] = useState(1)
  const onHeightChange= (event) => {
    setHeight(event.currentTarget.value)
}
const onWeightChange= (event) => {
  setWeight(event.currentTarget.value)
}
const onExerciseTimeChange= (event) => {
  setExerciseTime(event.currentTarget.value)
}
const onExerciseSelectChange= (event) => {
  setExerciseValue(event.currentTarget.value)
}

  const onDescriptionChange = (event) => {
      setDescriptionValue(event.currentTarget.value)
  }

  const onAgeChange = (event) => {
      setAgeValue(event.currentTarget.value)
  }

  const onGenderSelectChange = (event) => {
      setGenderValue(event.currentTarget.value)
  }

 
  const onSubmit = (event) => {
      event.preventDefault();
  }
  return (
 
    <div className='inputPage'>    
 
 <div style={{ maxWidth: '700px', margin: '2rem auto', background: '#f5f5dc', padding: '20px', borderRadius: '10px' }}>
    <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'white' }}>
          <Title level={2}> 맞춤 영양제 정보 입력</Title>
        </div>


    <Form onSubmit={onSubmit} >


        <br />
        <br />
        <label>성별</label><br />
        <select onChange={onGenderSelectChange} value={genderValue}>
            {Gender.map(item => (
                <option key={item.key} value={item.key}>{item.value} </option>
            ))}
        </select>
        <br />
        <br />
        <label>나이(만 나이)</label>
        <Input
            onChange={onAgeChange}
            value={AgeValue}
            type="number"
        />
         <br />
        <br />
        
        <label>키(cm)</label>
        <Input
            onChange={onHeightChange}
            value={height}
            type="number"
        />
         <br />
        <br />
        <label>몸무게(kg)</label>
        <Input
            onChange={onWeightChange}
            value={weight}
            type="number"
        />
        
        <br /><br />
       
        <label>식단</label>
        <TextArea
            onChange={onDescriptionChange}
            value={DescriptionValue}
        />
        <br />
        <br />
        <label>운동종류</label><br />
        
        <select onChange={onExerciseSelectChange} value={ExerciseValue}>
            {Exercise.map(item => (
                <option key={item.key} value={item.key}>{item.value} </option>
            ))}
        </select>   
        <br />
        <br />
        <label>운동시간(시간)</label>
        <br />
       
        <Input
            onChange={onExerciseTimeChange}
            value={exerciseTime}
            type="number"
        />
        <br />
        <br />
        
        <button className='btn'
            onClick={onSubmit}
        >
            제출하기
        </button>

    </Form>

</div>
</div>

  )
}

export default InputPage;
