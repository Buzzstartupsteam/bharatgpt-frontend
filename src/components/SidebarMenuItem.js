
export default function SidebarMenuItem({ text, Icon }) {
    return (
        <div className="hoverEffect flex items-center w-full justify-center xl:justify-start text-lg space-x-3">
            <Icon className="text-2xl" />
            <span className="xl:inline">{text}</span>
        </div>
    )
}
