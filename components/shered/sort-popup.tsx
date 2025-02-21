import { ArrowUpDown } from "lucide-react";

interface Props {
    CalssName?: string;
}

export const SortPopup: React.FC<Props> = ({ СlassName }) => {
    return (
        <div>
            <ArrowUpDown size={12} className=""/><p>Сортировка</p><p className="text-primary">популярное</p> 
        </div>
    )
}