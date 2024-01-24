import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  margin-bottom: 20px;
`
export const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  align-items: center;
  width: 100%;
`

export const MusicTrackImage = styled.img`
  height: 150px;
  width: 200px;
  margin-right: 30px;
`

export const NameGenreContainer = styled.div``

export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
`

export const Duration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
`
