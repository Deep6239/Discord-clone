'use client'

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"
import { InviteModal } from "@/components/modals/invite-model"
import { EditServerModal } from "@/components/modals/edit-server-modal"
import { MembersModal } from "@/components/modals/members-model"
import { CreateChannelModal } from "@/components/modals/create-channel-modal"
import { LeaveServerModal } from "@/components/modals/leave-server-model"
import { DeleteServerModal } from "@/components/modals/delete-server-model"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return(    
        <>
            <CreateServerModal />
            <InviteModal />
            <EditServerModal />
            <MembersModal />
            <CreateChannelModal />
            <LeaveServerModal />
            <DeleteServerModal />
        </>
    )
}