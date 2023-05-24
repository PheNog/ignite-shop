import { styled } from "..";

export const ContainerCartPreview = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100vh',
    width: '480px',
    position: 'absolute',
    top: 0,
    backgroundColor: 'grey',
    right: 0,
    padding: '3rem',
    zIndex: 1,
    background: '#202024'
})

export const ContainerProductsAndTitle = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    button:{
        width: '24px',
        fontSize: '16px',
        cursor: 'pointer',
    }
})

export const RowClosePreview = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end'
})

export const TitlePreviewCart = styled('div', {
    marginBottom: '2rem',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '160%',
    color: 'white'
})

export const ContainerMiniItems = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: '1.5rem'
})

export const ContainerImage = styled('div', {
    marginRight: '20px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    width: '101px',
    height: '93px',
    display: 'flex',
    justifyContent: 'cemter',
    alignItems: 'center',
})

export const TitlePriceAndRemoveContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

export const TitleProduct = styled('div', {
    color: '#C4C4CC',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '160%'
})

export const PriceLabel = styled('div', {
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '160%'
})

export const RemoveButton = styled('button', {
    background: 'transparent',
    border: 0,
    width: '65px',
    paddingTop: "0.5rem",
    color: '$green500',
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '160%',
    '&:hover': {
        color: '$green300'
    }
})

export const ContainerTotalAndCheckout = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
})

export const QuantityLabel = styled('div', {
    display: 'flex',
    marginBottom: '0.5rem',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#C4C4CC',
    span: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '160%'
    },
    label: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '160%'
    }
})
export const TotalValue = styled('div', {
    marginBottom: '3.5rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    span: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '160%'
    },
    label: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '160%'
    }
})

export const CheckoutButton = styled('button', {
    display: 'flex',
    width: '100% !important',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '20px 32px',
    gap: '10px',
    height: '69px',
    background: '#00875F',
    borderRadius: '8px',
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '160%',
    border: 0,
    cursor: 'pointer',
    '&:hover': {
        background: '$green300'
    }
})