import { BarsArrowUpIcon, BarsArrowDownIcon } from "@heroicons/react/24/outline";
import styles from "./buttons.module.scss";
import Icon from "@/components/Icon/Icon";
import { SortType } from "@/app/interfaces";

function SortButtons({ sort, onClick }: { sort: SortType; onClick: () => void }) {
    return (
        <button type="button" onClick={onClick} className={styles.button}>
            Sort by date
            <Icon icon={sort === SortType.DOWN ? BarsArrowUpIcon : BarsArrowDownIcon} />
        </button>
    );
}

export default SortButtons;
