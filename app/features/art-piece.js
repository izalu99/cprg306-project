import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';
import Link from 'next/link'
export default function ArtPiece({artID,imgURL, altText, title, artist, siteURL}) {
    
    
    return(
        <Col 
        key= {artID}
        className='w-2/3 rounded mx-auto items-center justify-between'>
            <Link 
            href={`/artdetails/${artID}`}
            target="_blank">
                <Card className="m-3">
                    <Card.Img variant="top" src={imgURL} alt={altText} className="mx-auto border-4 border-custom-pearl hover:border-custom-pink"/>
                    <Card.Body className="pt-5 pb-10 text-center">
                        <Card.Title className='text-2xl'>{title}</Card.Title>
                        <Card.Text className='text-lg'>{artist}</Card.Text>
                        <Button variant="primary" href={siteURL}>Learn More</Button>
                    </Card.Body>
                </Card>
            </Link>

        </Col>
    )
}


/**
 * <Col key={art.id} xs={12} md={4}>
                                <Card className="mb-4">
                                    <Card.Img variant="top" src={imgURLCAM(art.image_id)} alt={art.thumbnail?.alt_text} />
                                    <Card.Body>
                                        <Card.Title>{art.title}</Card.Title>
                                        <Card.Text>{art.artist_title}</Card.Text>
                                    </Card.Body>
                                </Card>
                        </Col>
 */


/**
 * <Col key={art.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={imgURLHAM(art.primaryimageurl)} alt={`${art.title}`} />
                            <Card.Body>
                                <Card.Title>{art.title}</Card.Title>
                                <Card.Text>{getArtistName(art)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
 */