; Copyright (c) Microsoft Corporation.  All rights reserved.

[Version]
Signature="$WINDOWS NT$"
Class=System
ClassGuid={4D36E97D-E325-11CE-BFC1-08002BE10318}
Provider=%MSFT%
PnpLockdown=1
DriverVer = 06/21/2006,10.0.22621.317

[SourceDisksNames]
3426=windows cd

[SourceDisksFiles]
volmgr.sys         = 3426

[DestinationDirs]
Volmgr_CopyFiles = 12                ; DIRID_DRIVERS

[ControlFlags]
BasicDriverOk=*
ExcludeFromSelect=*

[Manufacturer]
%MSFT%=volmgr_device,NTamd64

[volmgr_device.NTamd64]
%Volmgr.DeviceDesc%            = Volmgr, Root\VOLMGR         ; Volume Manager

;
; General installation section
;


[Volmgr]
CopyFiles      = Volmgr_CopyFiles
Re