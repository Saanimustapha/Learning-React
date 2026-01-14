import { useState } from "react"

export const Courses = () => {

    const [courses,setCourses] = useState(
        [
            {id:1,name:"React",register_count:0},
            {id:2,name:"Vue",register_count:0},
            {id:3,name:"Angular",register_count:0}
        ]
    )

    const onRegister = (id) => {
        setCourses(prevCourses => prevCourses.map(course => {
            if(course.id === id){
                return {...course, register_count: course.register_count + 1}
            }
            return course
        }))

    }

    const all_courses = courses.map((course) => {
        return (
            <CourseItems
            key={course.id}
            id={course.id}
            name={course.name}
            onClickRegister={onRegister}
            />
        )
    }
)

    const all_summary = courses.map((course) => {
        return (
            <CourseRegisterSummary
            key={course.id}
            name={course.name}
            register_count={course.register_count}
            />
        )
    })

    return(
        <>
        {all_courses}
        {all_summary}
        </>
    )
}


export const CourseItems = ({id,name,onClickRegister}) => {

    return(
        <>
        <div>
            name: {name}
            <button onClick={() => onClickRegister(id)}>Register</button>
        </div>
        </>
    )
}

export const CourseRegisterSummary = (props) => {

    return (
        <>
        <div>
            name: {props.name}
        </div>
        <div>
            times registered: {props.register_count}
        </div>
        </>
    )
}

