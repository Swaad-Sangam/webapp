<div class="BottomBar">
    <a href="/dashboard">
        <div class="Route">
            <div class="icon"><Fa icon={faHome} /></div>
            <div class="name">Explore</div>
        </div>
    </a>
    <a href="/dashboard/search">
        <div class="Route">
            <div class="icon"><Fa icon={faMagnifyingGlass} /></div>
            <div class="name">Search</div>
        </div>
    </a>
    <a href="/dashboard/newrecipe">
        <div class="Route">
            <div class="icon"><Fa icon={faPlusCircle} /></div>
            <div class="name">Post</div>
        </div>
    </a>
    <a href="/dashboard/groups">
        <div class="Route">
            <div class="icon"><Fa icon={faUserGroup} /></div>
            <div class="name">Groups</div>
        </div>
    </a>
    <a href="/dashboard/profile">
        <div class="Route">
            <div class="icon"><Fa icon={faUser} /></div>
            <div class="name">Profile</div>
        </div>
    </a>
</div>

<style lang="scss">
	.BottomBar {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: space-evenly;

		background-color: var(--container-lowest-bg-color);
		padding: 0.25rem;

        a:link {color:#000;}  
        a:visited {color:#000;}  
        a:hover {color:#000;}  
        a:active {color:#000;}   

        a {
            cursor: default;
            text-decoration: none;
        }

		.Route {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;

            background-color: var(--container-low-bg-color);
            padding: 0.25rem 1rem;
            border-radius: 1rem;

            cursor: pointer;

            .icon {
                font-size: 1.25rem;
            }

            .name {
                font-size: 0.9rem;
                font-weight: 500;
            }
        }
	}
</style>

<script>
// @ts-ignore
import Fa from 'svelte-fa/src/fa.svelte'

import { faHome, faLocationDot, faMagnifyingGlass, faPlusCircle, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
</script>
