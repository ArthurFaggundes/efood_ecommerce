import styled from 'styled-components'
import { colors, breakpoints } from '../../../styles'

export const Modal = styled.div`
  display: none;

  &.visible {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 1024px;

  > img {
    width: 16px !important;
    height: 16px !important;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    z-index: 3;

    @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.salmon};
  padding: 32px;
  color: ${colors.white};
  display: flex;
  //# width: 1024px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    padding: 16px;
    //! max-height: 80vh;
    //! width: 90%;
    overflow-y: auto;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      height: 200px;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      padding: 12px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const ModalButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.salmon};
  border: none;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: fit-content;
`
