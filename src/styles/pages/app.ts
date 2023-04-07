import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
})

export const Header = styled('div', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
})

export const ButtonX = styled('button', {
    width: 48,
    height: 48,
    background: '$gray800',
    borderRadius: 6,
    border: 0,
    cursor: 'pointer',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.425 5.625H19.575V6.75L19.5803 5.62501C20.0382 5.62716 20.4797 5.79601 20.8223 6.1C21.1648 6.40398 21.3849 6.82229 21.4414 7.27675L21.4431 7.29158L22.7741 19.289C22.7742 19.2896 22.7742 19.2901 22.7743 19.2906C22.8036 19.5515 22.7778 19.8156 22.6986 20.0659C22.6192 20.3167 22.4879 20.548 22.3133 20.7447C22.1386 20.9415 21.9246 21.0992 21.685 21.2078C21.4454 21.3164 21.1856 21.3734 20.9225 21.375L20.9156 21.375H3.07746C2.8144 21.3734 2.55463 21.3164 2.31503 21.2078C2.07543 21.0992 1.86136 20.9415 1.68673 20.7447C1.5121 20.548 1.38082 20.3167 1.30143 20.0659C1.2222 19.8157 1.19641 19.5516 1.22571 19.2907C1.22577 19.2902 1.22583 19.2896 1.2259 19.289L2.55686 7.29158L2.55861 7.27675C2.61514 6.82229 2.83523 6.40398 3.17775 6.1C3.52027 5.79601 3.96177 5.62716 4.41972 5.62501L4.425 5.625ZM19.2441 7.875H4.75594L3.5079 19.125H20.4921L19.2441 7.875Z' fill='%238D8D99'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 4.125C11.3038 4.125 10.6361 4.40156 10.1438 4.89384C9.65156 5.38613 9.375 6.05381 9.375 6.75V9.75C9.375 10.3713 8.87132 10.875 8.25 10.875C7.62868 10.875 7.125 10.3713 7.125 9.75V6.75C7.125 5.45707 7.63861 4.21709 8.55285 3.30285C9.46709 2.38861 10.7071 1.875 12 1.875C13.2929 1.875 14.5329 2.38861 15.4471 3.30285C16.3614 4.21709 16.875 5.45707 16.875 6.75V9.75C16.875 10.3713 16.3713 10.875 15.75 10.875C15.1287 10.875 14.625 10.3713 14.625 9.75V6.75C14.625 6.05381 14.3484 5.38613 13.8562 4.89384C13.3639 4.40156 12.6962 4.125 12 4.125Z' fill='%238D8D99'/%3E%3C/svg%3E%0A")`
})

export const LabelCartLength = styled('span', {
    position: 'relative',
    borderRadius: '1000px',
    width: '24px',
    height: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px',
    gap: '8px',
    right: '-33px',
    top: '-20px',
    background: '#00875F',
    border: '3px solid #121214'
})