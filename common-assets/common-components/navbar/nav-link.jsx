import { NavLinkWrapper, NavText } from './styles';
import Link from 'next/link';

function NavLink(props) {
    const { href, children, activated, pure } = props;
    let className = '';
    if (href) {
        className += 'its-link';
    }
    if (activated) {
        className += ' activated';
    }
    return (
        <NavLinkWrapper>
            {pure ? (
                <NavText href={href ? href : ''} className={className}>
                    {children}
                </NavText>
            ) : (
                <Link locale={false} href={href ? href : ''} prefetch={false}>
                    <NavText className={className}>{children}</NavText>
                </Link>
            )}
        </NavLinkWrapper>
    );
}

export default NavLink;
