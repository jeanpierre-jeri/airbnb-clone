interface Props {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryLabel?: string
}

export function Modal ({ isOpen = false, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryLabel }: Props) {
  return (
    <div>
      Modal
    </div>
  )
}
