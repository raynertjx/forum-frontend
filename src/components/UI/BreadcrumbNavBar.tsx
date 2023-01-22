import React from "react";

import { useAppSelector } from "../../helpers/hooks";

const BreadcrumbNavBar: React.FC = () => {
    const breadcrumbs = useAppSelector(state => state.breadcrumbs);
    return (
        <ul className="flex">
            {breadcrumbs.map((crumb) => (
                <li>{crumb}</li>
            ))}
        </ul>
    );
};

export default BreadcrumbNavBar;
