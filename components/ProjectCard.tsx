import {} from '@chakra-ui/react'
import Head from 'next/head'

export default function ProjectCard(props) {

    return(
        <>
        <iframe src={props.src} width="100%" height="480px"></iframe>
        </>
    )
}