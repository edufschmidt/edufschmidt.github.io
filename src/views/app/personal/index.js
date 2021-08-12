import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import Box from '_components/box'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Markdown from '_components/markdown'

import { photos } from './photos'

const Personal = () => {
  const location = useLocation()

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Eduardo Schmidt | Perosnal'
  }, [location])

  useEffect(() => {}, [])

  return (
    <Box flexDirection="column">
      <Markdown># Bio</Markdown>
      <Markdown>
        I grew up in [Ijuí](https://goo.gl/maps/X5WMck7KNqHFnajb8), a small city in the south of
        Brazil, but have lived in Porto Alegre, Florianópolis, Providence, Berlin and, more
        recently, in Luxembourg. In my spare time, I enjoy reading, playing footbal, biking, and
        building stuff.
      </Markdown>

      <Markdown># Photography</Markdown>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>

      <Markdown># Open-source</Markdown>
      <Markdown>
        [drago](https://github.com/seashell/drago): a flexible configuration manager for WireGuard
        designed to make it simple to configure secure network overlays spanning heterogeneous nodes
        distributed across different clouds and physical locations.
      </Markdown>
      <Markdown>
        [go-acl](https://github.com/seashell/go-acl): Generic implementation of an Access Control
        List system for enforcing authorization across different resources. While originally meant
        for utilization in the Drago project, this ACL system was built with flexibility in mind,
        and should be straightforward to configure and integrate into other codebases.
      </Markdown>
      <Markdown>
        [go-radix-tree](https://github.com/edufschmidt/go-radix-tree )Radix tree implementation in
        Go
      </Markdown>

      <Markdown># Other</Markdown>
    </Box>
  )
}

export default Personal
