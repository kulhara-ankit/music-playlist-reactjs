import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrackSong = () => {
    onClickDeleteSong(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onDeleteTrackSong}
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationDeleteContainer>
    </MusicListItem>
  )
}

export default MusicItem
