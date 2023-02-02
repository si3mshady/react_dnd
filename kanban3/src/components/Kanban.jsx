import React from 'react'
import { useState } from 'react'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

import starter_data from './../starter_data'

import Card from './Card'

import './kanban.css'





export default function Kanban() {

// const   [listOrder, setListOrder] = useState(starter_data)

const [listOrder, setListOrder] = useState(starter_data)

    const dropReset = result => {
        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = listOrder.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = listOrder.findIndex(e => e.id === destination.droppableId)

            const sourceCol = listOrder[sourceColIndex]
            const destinationCol = listOrder[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            listOrder[sourceColIndex].tasks = sourceTask
            listOrder[destinationColIndex].tasks = destinationTask

            setListOrder(listOrder)
        }
    }

  return (
    <DragDropContext onDragEnd={dropReset}>
        <div className='kanban'>

            {
                listOrder.map(element => (
                

                <Droppable
                key={element.id}
                droppableId={element.id}
                >

                {(provided) => (

                    <div
                        {...provided.droppableProps}
                        className={'section'}
                        ref={provided.innerRef}
                        >
                        <div className='title'>
                                {element.title}
                        </div>

                        <div className='tasks'>
                            {
                                element.tasks.map((task,idx) => (
                                 <Draggable
                                 
                                 key={task.id}
                                 draggableId={task.id}
                                 index={idx}
                                 >

                                 {(provided, snapshot) => (

                                    <div
                                       ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                        // style={{
                                        //   ...provided.dragHandleProps.style
                                        // }}
                                       
                                    >

                                    <Card>
                                        {task.title}
                                    </Card>

                                    </div>

                                 ) } 

                                 </Draggable>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    </div>

                )}


                </Droppable>

                )) 
            }


        </div>
    </DragDropContext>
  )
}
